import React from 'react';
import './App.css'; // CSS फाइल को import करें

class App extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // पूरी स्क्रीन की ऊंचाई लेगा
      },
      loaderText: {
        marginTop: '150px', // लोडर और टेक्स्ट के बीच स्पेस
      }
    };

    return (
      <div style={styles.container}>
        <div id="loader" className="circle ab bgcolor-1 c">
          <div id="s" className="circle ab bcolor-1 bgcolor-1 c1-o">
            <div className="bar ab bgcolor-1 b-1"></div>
            <div className="bar ab bgcolor-1 b-2"></div>
            <div className="bar ab bgcolor-1 b-3"></div>
          </div>
          <div id="d" className="circle ab c1-o">
            <div id="c1-1" className="circle ab bcolor-2 bgcolor-2 c1-i t"></div>
            <div id="c2-1" className="circle ab bcolor-2 bgcolor-2 c2-i t"></div>
            <div id="c3-1" className="circle ab bcolor-2 bgcolor-2 c3-i t"></div>
          </div>
        </div>
        <p style={styles.loaderText}>loading ubuntu</p>
      </div>
    );
  }
}

export default App;