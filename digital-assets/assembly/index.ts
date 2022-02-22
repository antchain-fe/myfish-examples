import { DRC721_draft, JSON, my, Storage } from '@antchain/myassembly';

export default class Contract extends DRC721_draft {
  private count: Storage<number> = new Storage<number>('count', 0);
  private totalSypply: number = 64;

  private whiteList: string[] = [
    '42698747e2fa87f27f2cdfee7373bb68ea53286e6c79f8f91a1da2157ae967e9',
  ];

  constructor() {
    super({
      issuer:
        '42698747e2fa87f27f2cdfee7373bb68ea53286e6c79f8f91a1da2157ae967e9',
      description:
        'This is a digital asset contract. You can mint a digital asset by calling the `Mint` method.',
      baseUri: null,
    });
  }

  /**
   * 让用户自己铸造
   * @param assetInfoStr JSON string of { name: string, word: string }
   * @returns 铸造之后该用户的所有资产 DigitalAsset Array JSON string
   */
  @EXPORT
  public Mint(): string {
    const currentCount = this.count.getData();
    my.assert(
      currentCount < this.totalSypply,
      `Total supply is ${this.totalSypply}`
    );

    const owner = my.getSender().str;

    // 仅白名单账户可以 mint
    const whiteList = this.whiteList;
    my.assert(
      whiteList.indexOf(owner) != -1,
      'Mint: you are not in the white list'
    );

    // 发放资产
    const assetObj = JSON.Value.Object();
    assetObj.set(
      'assetInfo',
      'f576fecb518c958190718122baf63f9fc7fdcdfde206861aaa0400834d79e0ba'
    );
    assetObj.set(
      'assetUri',
      'https://gw.alipayobjects.com/mdn/rms_e3b74f/afts/img/A*iw2TQrBHfLwAAAAAAAAAAAAAARQnAQ'
    );
    this.issue(owner, assetObj.toString());

    this.count.setData(currentCount + 1);

    // 返回所有资产
    return this.GetAssets(owner);
  }
}
