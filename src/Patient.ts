export interface IPatient {
    // sugar: number;
    // hyperthension: boolean; 
    // pulse: number;
    // medicines: number;
    treatmentStart: boolean;
    hyperthensionRisk: string;
    contraindicationACEI: boolean;
    contraindicationARB: boolean;
    coronaryArteryDisease: boolean;
  }
  
  // class Patient implements IPatient {
  
  //   public sugar: number;
  //   public medicines: number;
  //   public hyperthension: boolean;
  //   public pulse: number;

  //   constructor(
  //     sugar?: number,
  //     hyperthension?: boolean,
  //     pulse?: number,
  //     medicines?: number,
      
  //   ) {
  //     this.sugar = (sugar ?? 0);
  //     this.hyperthension = (hyperthension ?? false);
  //     this.pulse = (pulse ?? 0);
  //     this.medicines = (medicines ?? 0);
      
  //   }

  //   public takeMedicines(numberOfMedicines: number) {
  //     this.medicines += numberOfMedicines;
  //   }

  //   public deleteMedicines(numberOfMedicines: number) {
  //     this.medicines -= numberOfMedicines;
  //   }
    
  // }


  class Patient implements IPatient {
    public treatmentStart: boolean;
    public hyperthensionRisk: string;
    public contraindicationACEI: boolean;
    public contraindicationARB: boolean;
    public coronaryArteryDisease: boolean;
    public startfunc: number;

    constructor(treatmentStart?,hyperthensionRisk?,contraindicationACEI?,contraindicationARB?, coronaryArteryDisease?) {
      this.treatmentStart = (treatmentStart ?? false);
      this.hyperthensionRisk = (hyperthensionRisk ?? false);
      this.contraindicationACEI = (contraindicationACEI ?? false);
      this.contraindicationARB = (contraindicationARB ?? false);
      this.coronaryArteryDisease = (coronaryArteryDisease ?? false);
    }

    public aceiStart() {
      console.log('acei has been started');
    }
    public arbStart() {
      console.log('arb has been started: Alarm: "Dołącz ACEI"; Dołącz C09AA w najmniejszej dawce');
    }

    public ccbStart() {
      console.log('ccb has been started');
    }

    public bbStart() {
      console.log('bb has been started');
    }

  }

  export default Patient;