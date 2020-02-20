import React, {Component} from 'react';
import {Container, Paper} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {MdAdd} from "react-icons/md";
import AddForm from "./AddForm";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {MdExpandMore} from "react-icons/all";

class MainList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
            open: false,

        }
    }

    openForm = () => {
        this.setState({open: true})
    };
    onClose = () => {
        this.setState({open: false})
    };

    formItems = (items) => {
        this.setState(prevState => ({listItem: [...this.state.listItem, items]}))
    };

    render() {
        console.log(this.state.listItem);
        return (
            <div>
                <Container className='container'>
                    <Paper elevation={1}>
                        <div className='listHeader'><h3>Görevler</h3><IconButton
                            title={'Yeni Görev Eklemek için Tıklayınız'} color="default" onClick={this.openForm}
                            aria-label="add new duty"><MdAdd/>
                        </IconButton></div>
                        {this.state.open &&
                        <AddForm onClose={this.onClose} open={this.state.open} sendDatas={this.formItems}/>}
                        <div className="listBody">
                            {this.state.listItem.length === 0 &&
                            <div style={{fontSize: '15px', color: 'lightGray'}}>Hiç eklenmiş görev bulunmamaktadır,
                                lütfen görev ekleyiniz
                            </div>}
                            <div className="listBodyItem">
                            {this.state.listItem[0]?.adi && this.state.listItem.map( (item) =>
                                <ExpansionPanel key={item.adi}>
                                    <ExpansionPanelSummary
                                        expandIcon={<MdExpandMore/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{item.adi}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            {item.aciklama}
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )}
                            </div>
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default MainList;