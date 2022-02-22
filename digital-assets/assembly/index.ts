import { my, Storage, BaseContract } from '@antchain/myassembly';

export default class Contract extends BaseContract {
  protected name: Storage<string> = new Storage('name', 'myfish');

  @EXPORT
  public SetName(name: string): void {
    this.name.setData(name);
  }

  @EXPORT
  public GetName(): string {
    return this.name.getData();
  }

  @EXPORT
  public GetLastBlockNumber(): u64 {
    return my.getBlockNumber();
  }
}
