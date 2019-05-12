let Url
export default {
  //
  job () {
    Url = `query{
        jobs{
        _id,
        job_name
      }
      }`
    return Url
  }
}
// 查詢
// 例如worker的插入語句
// mutation{
//   WorkerCreate(data:{
//     name:"三头头",
//     work_id: 3,
//     job:["项目主管","资深架构师"],
//     rights:["积分","工作时长"]

//   }){
//     rights
//   }
// }
