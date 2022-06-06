import {useState, forwardRef, useImperativeHandle } from 'react';
import { Input } from 'antd';
import style from "./style.module.scss"
const { TextArea } = Input;
const PageSetting = (props,ref)=>{

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitleChange = (e)=>{
    setTitle(e.target.value)
  }
  const handleDescChange = (e)=>{
    setDescription(e.target.value)
  }
  useImperativeHandle(ref,()=>({title,description}))
  return <>
  <div className={style.item}>
    <span>页面标题</span>
    <Input value={title} onChange={handleTitleChange}/>
  </div>
  <div className={style.item}>
    <span>页面描述</span>
    <TextArea  autoSize={{ minRows: 4, maxRows:10 }} value={description} onChange={handleDescChange}/>
  </div>
  </>
}

export default forwardRef(PageSetting)