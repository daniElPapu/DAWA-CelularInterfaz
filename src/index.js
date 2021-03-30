import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Reception4, Wifi,BatteryFull ,Heart, Handbag} from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars,faWallet, faCube, faMapSigns,faAdjust,faChevronRight,faToggleOn,faToggleOff} from '@fortawesome/free-solid-svg-icons'
import usuario  from './usuario.png'
const App=() =>{
	const user={
		name:"Kampret",
		saldo: "7,548,000"
	}
	const items =[
		{	name:"Lokasi Sekarang",	unico:true,	toggle: faToggleOn },
		{	name:"Saldo",			unico:false,toggle: faToggleOn },
		{	name:"Kelola akun",		unico:false,toggle: faToggleOn },
		{	name:"Syarlat i Katentuan",unico:false,toggle: faToggleOn},
		{	name:"Tentang kami",	unico:false,toggle: faToggleOn},
		{	name:"Feedback",		unico:false,toggle: faToggleOn}		
	]
	const simbolos=[
		{	name:"Monedero", 	icon:faWallet	},
		{	name:"Carga",		icon:faCube		},
		{	name:"Agente",		icon:faMapSigns	},
		{	name:"Pegatinas",	icon:faAdjust	}
	]
  	return(
    <div className="celular">
      	<div className="caja">
			<Hora/>
			<Usuario usuario={user}/>
			<Simbolos simbolos={simbolos}/>
      	</div>
		<Menu items={items}/>
    </div>
  )
}
const Hora =()=>{
	return(
		<div className="hora">
			<b>9:41</b>
			<div className="iconos">
				<Reception4 size={18} fill="true"/>
				<Wifi size={18} fill="true"/>
				<BatteryFull size={18} fill="true"/>
			</div>  
		</div>
	)
}
const Usuario=(props)=>{
	return(
		<div className="usuario">
			<img className="usuario-img" src={usuario} alt="Icono de perfil"/>
			<div className="usuario-info">
				<div className="usuario-name">
					{props.usuario.name}
				</div>
				<div className="usuario-saldo">
					Saldo: Rp {props.usuario.saldo}
				</div>
			</div>
			<div className="usuario-iconos">
				<Heart size={20}/>
				<Handbag size={20}/>
			</div>
			<div className="usuario-buscador">
				<FontAwesomeIcon icon={faSearch} color="gray"/>
				<input type="text" placeholder="Buscar"/>
				<FontAwesomeIcon icon={faBars} color="gray"/>
			</div>
		</div>
	)
}
const Simbolos =(props)=>{
	return(
		<div className="simbolos">
			{
				props.simbolos.map((simbolo,index)=>{
					return (<Simbolo key={index} name={simbolo.name} icon={simbolo.icon}/>)
				})
			}
		</div>
	)
}
const Simbolo =(props)=>{
	return(
		<div className="simbolo">
			<div className="simbolo-icon">
				<FontAwesomeIcon icon={props.icon} color="gray"/>
			</div>
			<div className="simbolo-name">
				{props.name}
			</div>
		</div>
	)
}
const Menu =(props)=>{
	return (
		<div className="menu">
			{
				props.items.map((item,index)=>{
					return (
						<Item key={index} name={item.name} unico={item.unico} toggle={item.toggle}/>
					)
				})
			}
		</div>
	)
}
const Item=(props)=>{
	const [toggle,setToggle]= useState(props.toggle)
	if (props.unico){
		return(
		<div className="menu-item active">
			<div className="menu-item-name">
				{props.name}
			</div>
			<div className="menu-item-icon" onClick={()=>{if(toggle===faToggleOn){setToggle(faToggleOff)}else{setToggle(faToggleOn)}}}>
				<FontAwesomeIcon icon={toggle} color="green"/>
			</div>
		</div>
		)
	}
	else{
		return (
			<div className="menu-item">
				<div className="menu-item-name">
					{props.name}
				</div>
				<div className="menu-item-icon" >
					<FontAwesomeIcon icon={faChevronRight} color="gray"/>
				</div>
			</div>
		)
	}
}
ReactDOM.render(<App />,  document.getElementById('root'));