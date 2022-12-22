import {
  ChainIds,
  AlipayMiniProvider,
  PocketRequestAccountsResponse,
  PocketCallContractResponse,
  SignResponse,
  SolContract,
  WalletMethods,
} from '@antchain/jssdk/mini';
import { testContractABI as abi } from '../../contracts/test-contract';
import { getRandomPhrase } from '../../utils';

const provider = new AlipayMiniProvider({ chainId: ChainIds.LabChain });
const contract = new SolContract(
  { contractName: 'apocket-test-solidity-on-labchain', abi },
  provider
);

Page({
  data: {
    account: null,
    callContractResult: '',
    signResult: '',
    connectError: '',
    callContractError: '',
    signError: '',
    title: '欢迎来到蚂蚁链 web3 世界',
  },
  async handleConnect() {
    await provider.requestAccounts();
  },
  async handleCallContract() {
    await contract.call<any>({
      methodName: 'test',
      args: [1, 2],
    });
  },
  async handleSign() {
    await provider.sign({ payload: getRandomPhrase() });
  },

  async onShow() {
    const { method, data, error, id } = AlipayMiniProvider.getAuthorizeResult();
    // for debug
    // this.setData({
    //   title: 'id:' + id,
    // });
    if (method === WalletMethods.requestAccounts) {
      if (error) {
        this.setData({ account: null, connectError: '连接失败，请重试' });
      } else {
        const res = data as PocketRequestAccountsResponse;
        this.setData({ account: res[0], connectError: '' });
      }
    } else if (method === WalletMethods.callContract) {
      if (error) {
        this.setData({
          callContractResult: '',
          callContractError: `error: ${error.message || 'unknown'}`,
        });
      } else {
        const res = data as PocketCallContractResponse;
        this.setData({
          callContractResult: `code: ${res.resultCode}, return: ${res.returnValues[0]}`,
          callContractError: '',
        });
      }
    } else if (method === WalletMethods.sign) {
      if (error) {
        this.setData({
          signResult: '',
          signError: `error: ${error.message || 'unknown'}`,
        });
      } else {
        const res = data as SignResponse;
        this.setData({
          signResult: `timestamp: ${res.timestamp}, signatur: ${res.signature}`,
          signError: '',
        });
      }
    }
  },
});
