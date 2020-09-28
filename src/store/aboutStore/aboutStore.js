import APIClient from '../../network/index'

const aboutStore={
    state:{
        fenlei_left_one:[],
        fenlei_left_two:[],
        fenlei_left:[],
        fenlei_detail:[],
        xiangqing:{},
    },
    mutations:{
        Fenlei_left(state,items){ 
            console.log(items);
            state.fenlei_left_one=[]
            state.fenlei_left=[...items]
            state.fenlei_left_one.push({name:"所有数据"})
            items.forEach((element)=>{
                if(element.pid===0){
                    state.fenlei_left_one.push(element)
                }else{
                    state.fenlei_left_two.push(element)
                }
            })
        },
        Change(state,items){
            state.fenlei_left_two=[];
            if(items.name=="所有数据"){
                state.fenlei_left.forEach((element)=>{
                    if(element.pid!=0){
                        state.fenlei_left_two.push(element)
                    }
                })
            }else{
                state.fenlei_left.forEach((element)=>{
                    if(element.pid===items.id){
                        state.fenlei_left_two.push(element)
                    }
                })
            }
        },
        Detail(state,items){
            state.fenlei_detail=[]
            items.name.forEach((element)=>{
                if(element.categoryId==items.id){
                    state.fenlei_detail.push(element)
                }
            })
        },
        Xiangqing(state,items){
            state.xiangqing=items
        }
    },
    actions:{
        FENLEIL(context){
            APIClient.fenlei().then((res)=>{
                console.log(res);
                context.commit('Fenlei_left',res.data.data)
            })
        },
        CHANGE(context,item){
            context.commit("Change",item)
        },
        DETAIL(context,id){
            APIClient.getStoreList().then((res)=>{
                context.commit('Detail',{
                    name:res.data.data,
                    id:id
                })
            })
        },
        XQ(context,id){
            APIClient.xiangqing({
                params:{id:id}
            }).then((res)=>{
                context.commit('Xiangqing',res.data.data)
            })
        }
    },
    modules:{

    }
}

export default aboutStore