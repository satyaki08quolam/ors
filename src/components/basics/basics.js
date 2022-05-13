
import React, { useState, useEffect } from "react";
import {Pdata,SearchData } from "./sdata";
import {SearchIcon,Logo,Ques,Bell,Arrow, Building, RightHook, Collapse,Filter,Sort} from "./like.tsx"
import Log from "../images/logo.296dc52efca38db6751e1b8b80de7b05.svg"
import "../css/style.css"




const Nub = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="fler">
        <div>{Pdata.map((val, index) => {
        return( 
        <Nub_1 key={val.id} title={val.title} link={val.link} icon={val.icon} frIcon={val.frIcon}/>
        )})}
        </div>
        <div><Main data={SearchData} /></div>
      </div>
    </React.Fragment>
  );
};

const Nub_1 = (props) => {
  const [shape, setShape] = useState(false);
  return (
    <React.Fragment>
      <div className="">
        <div className="left">
          <div className="drop">
            <div>
              <span>{props.frIcon} </span>
              <p>{props.title}</p>
              <span className="clicker" onClick={()=>{setShape(!shape);}}>{props.icon}</span>
            </div>
            {shape && (
              <div className="menu">
                <p>{props.link[0]}</p>
                <p>{props.link[1]}</p>
                <p>{props.link[2]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


const Header=(props)=>{
  const [name, setName] = useState("");
  return(
    <header>
      <div className="LOGO">
        <img src={Log} alt="Logo" />
      </div>
      
      <div className="">
        <div className="searchIco">{<SearchIcon />}</div>
        <input type="text" placeholder="Search ship/company" value={name} onChange={(e) => {
          console.log(e.target.value);
              setName(e.target.value);
            }}
        />
      </div>

      <div className="">
        <div>{<Ques />}</div>
        <div>{<Bell />}</div>
        <div><span className="as">as</span><span>ajay sinha</span><span className="arrow">{<Arrow />}</span></div>
      </div>
    </header>
  )
}


const Main=({placeholder,data})=>{

  const [filterData,setfilterData]=useState([])

  const handleFilter=(e)=>{
    const searchWord=e.target.value;
    console.log(searchWord)
    const newFilter=data.filter((value)=>{
      return value.option.includes(searchWord.toLowerCase());
  })
  if(searchWord===""){
    setfilterData([])
  }
    else{
      setfilterData(newFilter);
    }
  };

  return(
    <div className="right">

      <div className="tag">
        <h4>pending contract reviews (20)</h4>
        <form>
          <div className="search_input">
            <div>{<SearchIcon />}</div>
            <input type="text" placeholder={placeholder} id="searchbox" onChange={handleFilter} />
          </div>
          {filterData.length!==0 && (
            <div className="searcher">
              {filterData.map((value,key)=>{
                return( <span key={value.id}>{value.option}</span>
              )})}
            </div>
          )}
        </form>
        <div className="filter">
          <div><span>{<Filter />}</span> filter</div>
        </div>
        <div className="sort">
          <div><span>{<Sort />}</span>sort</div>
        </div>
      </div>

      <div className="blog">
        <div>
          <p>
            <span>1 day left</span>
            <span> Proposed date of audit:</span>
            <span> 10-Apr-2022</span>
            <span>Mumbai</span>
          </p>
          <div><span>{<Building />}</span><span>shane marine private</span><span>{<RightHook />}</span></div>
        </div>
        <div>
          <p><span>requested by</span><span>audit/survey type</span></p>
          <p><span>-------------</span><span>-------------</span></p>
          <p><span>shane marine services private</span><span>ism-doc (intermediate)</span></p>
        </div>
      </div>


      <div className="vlog">
        <div className="left">
          <p><span>1 day left</span><span>proposed date of audit:10-Apr-2022</span><span>Mumbai</span></p>
          <p><span>{<Building />}</span><span>shane marine private</span><span>{<RightHook />}</span></p>
        </div>
        <div className='right'>
          <p><span>Requested by</span><span>Audit/Survey Tape </span></p>
          <p><span>------------------</span><span>-------------------</span></p>
          <p><span>Shane Marine Serivces Private</span><span>ISM-SMC</span></p>
        </div>
      </div>

    </div>
  )
}


export { Nub };
