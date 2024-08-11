/* State machine used to define in which state the server is: STOPPED, STARTING OR RUNNING */

export type StateName = 'STARTING' | 'RUNNING' | 'STOPPED' | 'ERROR';

export interface Status {
  color: string;
  desc: string;
}

const stateStatuses: Record<StateName, Status> = {
  STARTING: { color: 'bg-blue-500', desc: 'STARTING...' },
  RUNNING: { color: 'bg-green-700', desc: 'ONLINE' },
  STOPPED: { color: 'bg-red-700', desc: 'OFFLINE' },
  ERROR: { color: 'bg-orange-500', desc: 'Error occurred' },
};

export class StateMachine {
  private currentState: StateName;

  constructor(initialState: StateName = 'STOPPED') {
    this.currentState = initialState;
  }

  public getCurrentStatus(): StateName {
    return this.currentState;
  }

  public getStateInfo(): Status {
    return stateStatuses[this.currentState];
  }

  public transitionTo(state: StateName): void {
    const allowedTransitions: Record<StateName, StateName[]> = {
      STOPPED: ['STARTING', 'RUNNING' ,'ERROR'],
      STARTING: ['RUNNING', 'ERROR'],
      RUNNING: ['STOPPED', 'ERROR'],
      ERROR: ['STOPPED', 'ERROR'],
    };
    

    if (allowedTransitions[this.currentState].includes(state)) {
      console.log('Transition from ' + this.currentState + ' to ' + state);
      this.currentState = state;
    } else {
      throw new Error(`Invalid transition from ${this.currentState} to ${state}`);
    }
  }
}
