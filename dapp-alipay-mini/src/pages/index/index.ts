import {
  ChainIds,
  AlipayMiniProvider,
  SolContract,
} from "@antchain/jssdk/mini";
import { testContractABI as abi } from "../../contracts/test-contract";
import { getRandomPhrase } from "../../utils";

const provider = new AlipayMiniProvider({ chainId: ChainIds.OpenLab });
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
      const account = await provider.requestAccounts();
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
});
