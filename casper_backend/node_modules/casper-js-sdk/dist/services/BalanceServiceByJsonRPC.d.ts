/**
 * A service to query balance for accounts
 */
import { CasperServiceByJsonRPC } from './CasperServiceByJsonRPC';
import { CLPublicKey } from '../lib';
import { BigNumber } from '@ethersproject/bignumber';
export declare class BalanceServiceByJsonRPC {
    private casperService;
    private balanceUrefs;
    constructor(casperService: CasperServiceByJsonRPC);
    /**
     * Query balance for the specified account
     *
     * It will cache balance URef values for accounts so that on subsequent queries,
     * it only takes 1 state query not 4 to get the value.
     * @param blockHashBase16
     * @param publicKey
     */
    getAccountBalance(blockHashBase16: string, publicKey: CLPublicKey): Promise<BigNumber | undefined>;
}
