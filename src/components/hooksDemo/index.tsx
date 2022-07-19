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
  },[data4])
  return (
    <div>
      <div>数字：{JSON.stringify(data2.list)}</div>
      <button onClick={() => {setFlag(v => !v)}}>切换</button>
       <div>切换状态：{JSON.stringify(flag)}</div>
    </div>
  );
}
export default Index;