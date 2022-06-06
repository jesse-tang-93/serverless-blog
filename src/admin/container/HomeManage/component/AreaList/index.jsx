import { useState } from 'react'
import {Button ,} from 'antd';
import style from "./style.module.scss"
import { parseJsonByString } from "../../../../../common/utils.js"


const LISTDATA = parseJsonByString(window.localStorage.listData, [])

const AreaList = ()=> {
  const [list , setList] = useState(LISTDATA)

  const handleClick = () => {
    const newListItem ={}
    const newList = [...list]
    newList.push(newListItem)
    setList(newList)
  }

  const delListItemClick = (index)=>{
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
  // 保存区块配置
  const saveBlockSetting = ()=>{
    console.log('save 区块配置')
    const listData = JSON.stringify(list)
    window.localStorage.setItem('listData', listData)
  }
  return (
    <div>
      <ul className={style.list}>
        {list.map((item,index)=> <li key={index} className={style.item}>
          item{index}
          <span><Button size="small" type="primary" danger onClick={()=>delListItemClick(index)}>删除</Button></span>
        </li>)}
      </ul>
      <Button type="primary" onClick={handleClick}>新增页面区块</Button>
      <Button type="dashed" onClick={saveBlockSetting} className={style.save}>保存区块配置</Button>
    </div>
  )
}

export default AreaList