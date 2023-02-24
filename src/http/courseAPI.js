import { $host} from "./index";
export const fetchOneCourse = async (pk) => {
    const {data} = await $host.get('api/v1/courses/' + pk)
    return data
}
export const fetchOneOrganization = async (pk) => {
    const {data} = await $host.get('api/v1/organizations/' + pk)
    return data
}

export const fetchCourses = async () => {
    const {data} = await $host.get('api/v1/courses')
    return data
}
export const fetchOrganizations = async () => {
    const {data} = await $host.get('api/v1/organizations')
    return data
}
export const fetchCategory = async () => {
    const {data} = await $host.get('api/v1/course_categories/')
    return data
}



