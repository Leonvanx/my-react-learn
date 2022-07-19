import React,{ useState ,useEffect, useCallback} from 'react';
import usePow from '../../hooks/useMemoDemo';


const Index:React.FC<any> = (props)=> {
  const [flag, setFlag] = useState<boolean>(true)
  const [data1, setData1] = useState<number[]>([1,3,5])
  const [data2, setData2]  = useState<{list:number[]}>({list:[1,3,5]})
  const data3  = usePow([1,3,5])
  const data4  = usePow(data2.list)
  useEffect(()=>{
    console.log('flag:',flag)
    console.log('data1:',data1)
    console.log('data2:',data2)
    console.log('data3:',data3)
  },[data1,data2])
  const changeFlag = () =>{
   setFlag(flag => !flag)
  }
  const changeData1 = () =>{
    setData1(value =>{
      value[1] = 2
      return value
    })
  }
  const changeData2 = () =>{
    setData2(value =>{
      value.list.push(2)
      return {...value}
    })
  }
  return (
    <div>
      <div>数字：{JSON.stringify(data1)}</div>
      <button onClick={() => {changeFlag()}}>切换</button>
      <button onClick={() => {changeData1()}}>改变data1</button>
      <button onClick={() => {changeData2()}}>改变data2</button>
       <div>切换状态：{JSON.stringify(flag)}</div>
    </div>
  );
}
export default Index;