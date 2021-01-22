import React from "react";
import './masonry.css';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import $ from 'jquery'


class Masonry extends React.Component{
	constructor(props){
		super(props);
		this.state = {columns: 1};
		this.onResize = this.onResize.bind(this);
		//
		this.delete = this.delete.bind(this)
	}
	componentDidMount(){
		this.onResize();
		window.addEventListener('resize', this.onResize)	
	}
	
	getColumns(w){
		return this.props.brakePoints.reduceRight( (p, c, i) => {
			return c < w ? p : i;
		}, this.props.brakePoints.length) + 1;
	}
	
	onResize(){
		const columns = this.getColumns(this.refs.Masonry.offsetWidth);
		if(columns !== this.state.columns){
			this.setState({columns: columns});	
		}
	}
	
	mapChildren(){
		let col = [];
		const numC = this.state.columns;
		for(let i = 0; i < numC; i++){
			col.push([]);
		}
		return this.props.children.reduce((p,c,i) => {
			p[i%numC].push(c);
			return p;
		}, col);
	}
//////////////////////
	delete(ele) {
		console.log(ele)
		$.post("http://localhost:8080/delete_image",
		{"id":ele},
		(res) => {
			//console.log('images from database',res)
				// this.setState({
				// 	images : res,
				// 	copy : res
				// })
				console.log('server response')
				this.props.sendData(res)
			}
		)
	}
/////////////////////
	render(){
		return (
			<div className="masonry" ref="Masonry">
				{this.mapChildren().map((col, ci) => {
					return (
						<div className="column" key={ci} >
							{col.map((child, i) => {
								return (
                                <div className="show-image" key={i} id={i}>
									<MDBView hover>
              							{child}
              							<MDBMask className="flex-center" overlay="red-light">
										  <p className="white-text">{child.props.src.label}</p>
										  <input onClick={()=>this.delete(child.props.src.id)}  className="the-buttons" type="button" value=" delete " />
              							</MDBMask>
            						</MDBView>
                                    
                                </div>)
							})}
						</div>
					)
				})}
                 
			</div>
		)
	}
}

export default Masonry;
