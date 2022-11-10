import React, { PureComponent } from "react";
import ReactImageViewer from "./ReactImageViewer";

class ImageViewer extends PureComponent {
  state = {
    isOpen: false
  };

  handleImageClick = event => {
    this.setState({
      isOpen: true
    });
  };

  handleImageClose = event => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    let imgSrc =
      "https://images.dog.ceo/breeds/mountain-swiss/n02107574_1059.jpg";
    return (
      <>
        <img alt="PICTU" onClick={() => this.handleImageClick()} src={imgSrc} />
        <ReactImageViewer
          imgs={imgSrc}
          isOpen={this.state.isOpen}
          onClose={() => this.handleImageClose()}
        />
      </>
    );
  }
}

export default ImageViewer;