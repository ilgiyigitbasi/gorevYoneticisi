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
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

class MainList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
            open: false,
            activePage: 1,

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
    deleteItem = (i) => {
        const listItem = this.state.listItem.filter(function (item) {
            return item.id !== i
        });
        this.setState({listItem})
    };

    render() {
        const filteredUsersGunluk = this.state.listItem.filter(function (fields) {
            return fields.type === 'gunluk'
        });
        const filteredUsersAylik = this.state.listItem.filter(function (fields) {
            return fields.type === 'aylik'
        });
        const filteredUsersHaftalik = this.state.listItem.filter(function (fields) {
            return fields.type === 'haftalik'
        });
        return (
            <div>
                <Container className='container'>
                    <Paper elevation={1}>
                        <div className='listHeader'><h3>Görevler</h3><IconButton style={{height: '50px', top: '5px'}}
                                                                                 title={'Yeni Görev Eklemek için Tıklayınız'}
                                                                                 color="default" onClick={this.openForm}
                                                                                 aria-label="add new duty"><MdAdd/>
                        </IconButton></div>
                        {this.state.open &&
                        <AddForm onClose={this.onClose} open={this.state.open} sendDatas={this.formItems}/>}
                        <Tabs value={this.state.activePage}
                              indicatorColor="primary"
                              textColor="inherit"
                              centered>
                            <Tab label="Günlük Görevler" value={1} onClick={() => this.setState({activePage: 1})}/>
                            <Tab label="Haftalık Görevler" value={2} onClick={() => this.setState({activePage: 2})}/>
                            <Tab label="Aylık Görevler" value={3} onClick={() => this.setState({activePage: 3})}/>
                        </Tabs>
                        <div className={this.state.listItem.length === 0 ? "listBody" : "listBodyActive"}>
                            <div style={this.state.listItem.length === 0 ? {
                                fontSize: '15px',
                                color: 'lightGray'
                            } : {display: 'none'}}>Hiç
                                eklenmiş görev bulunmamaktadır,
                                lütfen görev ekleyiniz
                            </div>
                            <div className={this.state.listItem.length === 0 ? "listBodyItem" : "listBodyItemActive"}>
                                {this.state.activePage === 1 && filteredUsersGunluk.map((item) =>
                                    <ExpansionPanel key={item.adi} style={{margin: '5px'}}>
                                        <ExpansionPanelSummary
                                            expandIcon={<MdExpandMore/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>{item.adi}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography style={{fontSize: '12px'}}>
                                                <span>Açıklama: {item.aciklama}</span><br/>
                                                <span> Tarih: {item.date.split('T')[0]}</span><br/>
                                                <span> Saat: {item.date.split('T')[1]}</span>
                                            </Typography>
                                        </ExpansionPanelDetails>
                                        <div className="todo-footer">
                                            <Button variant="contained" color="secondary" style={{margin: '10px'}}
                                                    onClick={() => this.deleteItem(item.id)}>Sil</Button>
                                        </div>
                                    </ExpansionPanel>
                                )}{this.state.activePage === 2 && filteredUsersHaftalik.map((item,) =>
                                <ExpansionPanel key={item.adi} style={{margin: '5px'}}>
                                    <ExpansionPanelSummary
                                        expandIcon={<MdExpandMore/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{item.adi}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{flexDirection: "column"}}> <Typography
                                        style={{margin: '15px'}}>Açıklama: {item.aciklama}</Typography>
                                        <Typography
                                            style={{margin: '15px'}}>Tarih: {item.date?.split('T')[0]}</Typography>
                                        <Typography
                                            style={{margin: '15px'}}> Saat:{item.date?.split('T')[1]}</Typography>
                                    </ExpansionPanelDetails>
                                    < div className="todo-footer">
                                        <Button variant="contained" color="secondary" style={{margin: '10px'}}
                                                onClick={() => this.deleteItem(item.id)}>Sil</Button>
                                    </div>
                                </ExpansionPanel>
                            )}
                                {this.state.activePage === 3 && filteredUsersAylik.map((item, id) =>
                                    <ExpansionPanel key={item.adi} style={{margin: '5px'}}>
                                        <ExpansionPanelSummary
                                            expandIcon={<MdExpandMore/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>{item.adi}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography style={{fontSize: '12px'}}>
                                                <span>Açıklama: {item.aciklama}</span><br/>
                                                <span> Tarih: {item.date?.split('T')[0]}</span><br/>
                                                <span> Saat: {item.date?.split('T')[1]}</span>
                                            </Typography>
                                        </ExpansionPanelDetails>
                                        <div className="todo-footer">
                                            <Button variant="contained" color="secondary" style={{margin: '10px'}}
                                                    onClick={() => this.deleteItem(id)}>Sil</Button>
                                        </div>
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