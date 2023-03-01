"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class Patient {
    constructor(treatmentStart, hyperthensionRisk, contraindicationACEI, contraindicationARB, coronaryArteryDisease) {
        this.treatmentStart = (treatmentStart !== null && treatmentStart !== void 0 ? treatmentStart : false);
        this.hyperthensionRisk = (hyperthensionRisk !== null && hyperthensionRisk !== void 0 ? hyperthensionRisk : false);
        this.contraindicationACEI = (contraindicationACEI !== null && contraindicationACEI !== void 0 ? contraindicationACEI : false);
        this.contraindicationARB = (contraindicationARB !== null && contraindicationARB !== void 0 ? contraindicationARB : false);
        this.coronaryArteryDisease = (coronaryArteryDisease !== null && coronaryArteryDisease !== void 0 ? coronaryArteryDisease : false);
    }
    aceiStart() {
        console.log('acei has been started');
    }
    arbStart() {
        console.log('arb has been started: Alarm: "Dołącz ACEI"; Dołącz C09AA w najmniejszej dawce');
    }
    ccbStart() {
        console.log('ccb has been started');
    }
    bbStart() {
        console.log('bb has been started');
    }
}
exports.default = Patient;
//# sourceMappingURL=Patient.js.map