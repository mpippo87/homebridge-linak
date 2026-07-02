import { PlatformAccessory } from 'homebridge';
import { LinakDeskPlatform } from './platform';
/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
export declare class DeskAccessory {
    private readonly platform;
    private readonly accessory;
    private service;
    private currentPos;
    private isMoving;
    private isPolling;
    private currentlyRequestingMove;
    private currentPollProcess;
    private currentMoveProcess;
    private requestedPosTimer;
    private baseCommand;
    private maxRetries;
    private currentMoveRetry;
    constructor(platform: LinakDeskPlatform, accessory: PlatformAccessory);
    PercentageToHeight(percentage: number): number;
    HeightToPercentage(height: number): number;
    poll(): void;
    moveToPercent(percentage: number): Promise<void>;
    /**
     * Handle requests to set the "Target Position" characteristic
     */
    handleTargetPositionSet(value: any): void;
    /**
     * Handle requests to get the current value of the "Target Position" characteristic
     */
    handleTargetPositionGet(): number;
    /**
     * Handle requests to get the current value of the "Position State" characteristic
     */
    handlePositionStateGet(): number;
    /**
       * Handle requests to get the current value of the "Current Position" characteristic
       */
    handleCurrentPositionGet(): number;
}
//# sourceMappingURL=platformAccessory.d.ts.map