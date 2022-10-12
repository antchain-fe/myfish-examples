import { Identity, mock } from '@antchain/myassembly';
import Contract from '.';

const owner =
  '42698747e2fa87f27f2cdfee7373bb68ea53286e6c79f8f91a1da2157ae967e9';

describe('Contract test', () => {
  test('AssetMeta', () => {
    const contract = new Contract();
    expect(contract.AssetMeta()).toBe(
      `{"issuer":"${owner}","description":"This is a digital asset contract."}`
    );
    mock.my.getSender.returnValue(
      new Identity(
        '42698747e2fa87f27f2cdfee7373bb68ea53286e6c79f8f91a1da2157ae967e9'
      )
    );
    expect(contract.Mint()).toBe(
      '[{"assetInfo":"f576fecb518c958190718122baf63f9fc7fdcdfde206861aaa0400834d79e0ba","assetUri":"https://gw.alipayobjects.com/mdn/rms_e3b74f/afts/img/A*iw2TQrBHfLwAAAAAAAAAAAAAARQnAQ","assetId":"1"}]'
    );
  });
});
