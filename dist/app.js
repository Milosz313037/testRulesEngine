"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jet_logger_1 = __importDefault(require("jet-logger"));
const getMedicines_1 = __importDefault(require("./getMedicines"));
const Patient_1 = __importDefault(require("./Patient"));
const patient = new Patient_1.default(true, 'niskie', true, true, false);
// ERROR: Error: Error on DecisionTable(Patients) : The operation must began with 
// the Fact's attribute, contain one operator, and end with "$param". Operation: "sugar >= $param AND pulse <= $param AND hyperthension == $ param"
(() => __awaiter(void 0, void 0, void 0, function* () {
    const p = (total) => jet_logger_1.default.info('finish ' + total + '\n');
    let medicinesToTake = yield (0, getMedicines_1.default)(patient);
    p(medicinesToTake);
}))();
//# sourceMappingURL=app.js.map