import axios from "./config"

//用户登录
export function login(data) {
    return axios({
        url: "/login",
        method: "post",
        data
    })
}
// 添加班级
export const addClass = data => axios.post("/class", data)
// 查询班级
export const selectClass = params => axios.get("/class", { params })

export const delClass = params => axios.delete("/class", { params })
//编辑
export const editClass = data => axios.put("/class", data)

export const selectClassByStatus = status => axios.get(`/class/${status}`)

export const addNewStudent = data => axios.post("/student", data)

export const selectStudent = params => axios.get("/student", { params })

// 删除学生
export const delStudent = params => axios.delete("/student", { params })