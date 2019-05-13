// export const HelloWorld = (resolve) => {
//   import('@/components/HelloWorld').then((module) => {
//     resolve(module)
//   })
// }
// export const root = (resolve) => {
//   import('@/views/root').then((module) => {
//     resolve(module)
//   })
// }
//
export default {
  permision (resolve) {
    import('@/components/permision').then((module) => {
      resolve(module)
    })
  },
  echarts (resolve) {
    import('@/components/line/line').then((module) => {
      resolve(module)
    })
  },
  root (resolve) {
    import('@/views/root').then((module) => {
      resolve(module)
    })
  },
  mixEcharts (resolve) {
    import('@/components/line/mixEcharts').then((module) => {
      resolve(module)
    })
  },
  students (resolve) {
    import('@/components/teachers/students').then((module) => {
      resolve(module)
    })
  },
  hello (resolve) {
    import('@/components/hello/hello').then((module) => {
      resolve(module)
    })
  }
}
