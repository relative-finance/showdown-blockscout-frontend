import type { UserOpsItem, UserOp, UserOpsAccount } from 'types/api/userOps';

export const USER_OPS_ITEM: UserOpsItem = {
  hash: '0xb94fab8f31f83001a23e20b2ce3cdcfb284c57a64b9a073e0e09c018bc701978',
  block_number: '10356381',
  transaction_hash: '0xffcef406eb73986e25666ecfbe03b9dd19d19f28af7477923a5d2979f7b06a43',
  address: '0x749abd4A31CC4B005526A5F288BEB27f3e239067',
  timestamp: '1704964728',
  status: true,
  fee: '48285720012071430',
};

export const USER_OP: UserOp = {
  hash: '0x20d6ed2bf0a04b011184c801e0b79fbd9411d32be14a6fab3d6150f2691970df',
  sender: '0xAb28462026f7E7318808a6aF1accAbD13031Af9c',
  nonce: '0x000000000000000000000000000000000000000000000000000000000000000b',
  init_code: null,
  // eslint-disable-next-line max-len
  call_data: '0x51945447000000000000000000000000fd04fb0538479ad70dfae539c875b2c1802050120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024d55f960d0adbe9c9b444dc1fbe2b475312067d9dea42db93646ccc87057657aba1d49cd800000000000000000000000000000000000000000000000000000000',
  call_gas_limit: '71316',
  verification_gas_limit: '91551',
  pre_verification_gas: '53627',
  max_fee_per_gas: '100000020',
  max_priority_fee_per_gas: '100000000',
  // eslint-disable-next-line max-len
  signature: '0x00000000e1dcf07c8718b7332ec4df784a18ea1d94a22886b9640c47a14ff3642c11840a63b7bb7f1d421d3eed4f8c5ca40cc421bbde196afa430aad9773703e23c382d11c',
  aggregator: null,
  aggregator_signature: null,
  entry_point: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
  transaction_hash: '0xf2609117783dde161ee08f48e0ce4769645956eb7b86897290592cf85a268d7d',
  block_number: '10358181',
  block_hash: '0xbb29763848c5201c47c3a0d44148b662222c480c4f12ec03fe7f8129d6af9eb0',
  bundler: '0x6892BEF4aE1b5cb33F9A175Ab822518c9025fc3C',
  factory: null,
  paymaster: '0xE93ECa6595fe94091DC1af46aaC2A8b5D7990770',
  status: true,
  revert_reason: null,
  gas: '399596',
  sponsor_type: 'paymaster_sponsor',
  fee: '17927001792700',
  timestamp: '1704994440',
  user_logs_count: 1,
  user_logs_start_index: 2,
};

export const USER_OPS_ACCOUNT: UserOpsAccount = {
  total_ops: 1,
};
