import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Draggable from 'react-draggable';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

class QuickView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );

  }

  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  handleClickOutside(event) {
    const domNode = findDOMNode(this.refs.modal);
    if (!domNode || !domNode.contains(event.target)) {
      this.props.closeModal();
    }
  }

  handleClose() {
    this.props.closeModal();
  }

  render() {

    
    
    return (
      <div>
        <Dialog open={this.props.openModal} onClose={this.handleClose.bind(this)} PaperComponent={PaperComponent} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={'sm'} >
          <DialogTitle id="form-dialog-title" style={{ cursor: 'move' }}>Product Preview</DialogTitle>
          <DialogContent>
            <div className="quick-view">
              <div className="quick-view-image">
                <img
                  src={this.props.product.image}
                  alt={this.props.product.product_name}
                />
              </div>
              <div className="quick-view-details">
                <span className="product-name">{this.props.product.product_name}</span>
              </div>
            </div>

          </DialogContent>

        </Dialog>
      </div>
    );
  }
}

export default QuickView;
