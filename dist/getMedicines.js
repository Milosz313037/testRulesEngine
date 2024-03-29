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
const trool_1 = __importDefault(require("trool"));
const CSV_FILE_PATH = './exelrulestest.csv';
function getMedicines(Patient) {
    return __awaiter(this, void 0, void 0, function* () {
        // let medicines = 0;
        let fun = 0;
        try {
            const facts = _setupFactsHolder(Patient), engine = yield (0, trool_1.default)(CSV_FILE_PATH);
            const updatedFacts = engine.applyRules(facts);
            // medicines = facts.Patients.medicines;
            fun = facts.Patients.startfunc;
        }
        catch (err) {
            jet_logger_1.default.err(err, true);
            // medicines = -1;
            fun = -1;
        }
        return ``;
        // return ('wez tyle lekow ' + medicines);
    });
}
function _setupFactsHolder(Patients) {
    return { Patients };
}
exports.default = getMedicines;
//# sourceMappingURL=getMedicines.js.map