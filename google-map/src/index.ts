import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User()
console.log(user)

const company = new Company()
console.log(company)

const divId = 'map'
const customMap = new CustomMap(divId)
customMap.addMarker(user)
customMap.addMarker(company)
