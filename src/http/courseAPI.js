
import { $host} from "./index";

export const fetchOneCourse = async (id) => {
    const {data} = await $host.get('api/course/' + id)
    return data
}
export const fetchCourses = async (typeId, brandId, page,) => {
    const {data} = await $host.get('api/course', {params: {
            typeId, brandId, page, //если запросы не пусты, эти параметры на автомете подставляются
        }})
    return data
}
export const fetchSchool = async (courseId) => {
    const {data} = await $host.get('api/schools', {params: {
            courseId //если запросы не пусты, эти параметры на автомете подставляются
        }})
    return data
}
export const fetchOneSchool = async (id) => {
    const {data} = await $host.get('api/school/' + id)
    return data
}
export const fetchOrganization = async () => {
    const {data} = await $host.get('api/organization' )
    return data
}

// export const createType = async (type) => {
//     const {data} = await $authHost.post('api/type', type)
//     return data
// }//52п.  Создание типа доступ имеет только админ

// export const fetchCourses = async () => {
//     const {data} = await $host.get('api/type')
//     return data
// }// Получать типы может каждый

// export const createBrand = async (brand) => {
//     const {data} = await $authHost.post('api/brand', brand)
//     return data
// }
//55п. Так же и с брэндами, девайсами



// export const createDevice = async (device) => {
//     const {data} = await $authHost.post('api/device', device)
//     return data
// }
// 64п. Передаем параметры, где получаем устройства

