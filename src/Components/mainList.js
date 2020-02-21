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
        const listItem = this.state.listItem.filter((todo, todoIndex) => {
            return todoIndex !== i
        });
        this.setState({listItem})
    };

    render() {
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
                        <Tabs value={this.state.activePage}
                              indicatorColor="primary"
                              textColor="default"
                              centered>
                            <Tab label="Günlük Görevler" value={1} onClick={() => this.setState({activePage: 1})}/>
                            <Tab label="Aylık Görevler" value={2} onClick={() => this.setState({activePage: 2})}/>
                            <Tab label="Haftalık Görevler" value={3} onClick={() => this.setState({activePage: 3})}/>
                        </Tabs>
                        <div className={this.state.listItem.length === 0 ? "listBody" : "listBodyActive"}>
                            {this.state.listItem.length === 0 &&
                            <div style={{fontSize: '15px', color: 'lightGray'}}>Hiç eklenmiş görev bulunmamaktadır,
                                lütfen görev ekleyiniz
                            </div>}
                            <div className={this.state.listItem.length === 0 ? "listBodyItem" : "listBodyItemActive"}>
                                {this.state.listItem[0]?.adi && this.activePage === 1 && this.state.listItem.map((item, i) =>
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
                                                {item.date}
                                            </Typography>
                                            <div className="todo-footer">
                                                <Button variant="contained" color="secondary"
                                                        onClick={() => this.deleteItem(i)}>Sil</Button>
                                            </div>
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