import {
  ChainIds,
  AlipayMiniProvider,
  SolContract,
} from "@antchain/jssdk/mini";
import { testContractABI as abi } from "../../contracts/test-contract";
import { getRandomPhrase } from "../../utils";

const provider = new AlipayMiniProvider({ chainId: ChainIds.LabChain });
const contract = new SolContract({ contractName: "", abi }, provider);

Page({
  data: {
    account: null,
    callContractResult: "",
    signResult: "",
    connectError: "",
    callContractError: "",
    signError: "",
  },
  async handleConnect() {
    try {
      const [ account ] = await provider.requestAccounts();
      this.setData({ account, connectError: "" });
    } catch (e) {
      this.setData({ account: null, connectError: "连接失败，请重试" });
    }
  },
  async handleCallContract() {
    try {
      const res = await contract.call<any>({
        methodName: "",
        args: [],
      });
      this.setData({
        callContractResult: `code: ${res.receiptCode}, result: ${res.returnValue}`,
        callContractError: "",
      });
    } catch (e) {
      this.setData({
        callContractResult: "",
        callContractError: `error: ${e.message || "unknown"}`,
      });
    }
  },
  async handleSign() {
    try {
      const res = await provider.sign({ payload: getRandomPhrase() });
      this.setData({
        signResult: `timestamp: ${res.timestamp}, signatur: ${res.signature}`,
        signError: "",
      });
    } catch (e) {
      this.setData({
        signResult: "",
        signError: `error: ${e.message || "unknown"}`,
      });
    }
  },


  async onShow() {
    try {
      // 在部分 Android 机器上，因为跳转回来无法出发 onAppShow（JSSDK 中会用到），导致无法正常出发 JSSDK 的调用
      // 该方案为一个临时解决方案，未来 getAndriodAuthorizeResult 方法可能会移除，相关内容联系 A-Pocket 相关同学获取支持
      const [ account ] = AlipayMiniProvider.getAndriodAuthorizeResult();
      this.setData({
        account,
      });
    } catch (e) {
      console.error(e);
    }
  },
});
