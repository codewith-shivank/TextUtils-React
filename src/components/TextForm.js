import React, {useState} from 'react';
import { FiCopy, FiTrash2, FiType, FiAlignLeft, FiDownload, FiRotateCcw } from 'react-icons/fi';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const updateWithHistory = (newText) => {
        setText(newText);
        setHistory([...history.slice(0, historyIndex + 1), newText]);
        setHistoryIndex(historyIndex + 1);
    };

    const handleUpClick = () => {
        updateWithHistory(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        updateWithHistory(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        updateWithHistory('');
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        updateWithHistory(text.split(/[ ]+/).join(" ").trim());
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleCapitalize = () => {
        const capitalizedText = text.split('. ')
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase())
            .join('. ');
        updateWithHistory(capitalizedText);
        props.showAlert("Text capitalized!", "success");
    }

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "textutils-content.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert("Text downloaded successfully!", "success");
    }

    const handleUndo = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setText(history[historyIndex - 1]);
            props.showAlert("Last action undone!", "info");
        }
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control shadow-sm"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode==='dark'?'#1e293b':'white',
                        color: props.mode==='dark'?'white':'#042743',
                        minHeight: '200px'
                    }}
                    id="myBox"
                    rows="8"
                    placeholder="Enter your text here..."
                ></textarea>
            </div>
            <div className="features-container">
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>
                    <FiType className="me-2" />
                    Uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleLoClick}>
                    <FiType className="me-2" />
                    Lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleCapitalize}>
                    <FiAlignLeft className="me-2" />
                    Capitalize
                </button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraSpaces}>
                    <FiAlignLeft className="me-2" />
                    Remove Spaces
                </button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>
                    <FiCopy className="me-2" />
                    Copy
                </button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleDownload}>
                    <FiDownload className="me-2" />
                    Download
                </button>
                <button disabled={historyIndex <= 0} className="btn btn-primary" onClick={handleUndo}>
                    <FiRotateCcw className="me-2" />
                    Undo
                </button>
                <button disabled={text.length===0} className="btn btn-danger" onClick={handleClearClick}>
                    <FiTrash2 className="me-2" />
                    Clear
                </button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <div className="stats-card">
                <h2>Text Statistics</h2>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <div className="stat-item">
                            <h4>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</h4>
                            <p>Words</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="stat-item">
                            <h4>{text.length}</h4>
                            <p>Characters</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="stat-item">
                            <h4>{text.split('.').filter(sentence => sentence.trim().length > 0).length}</h4>
                            <p>Sentences</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="stat-item">
                            <h4>{(0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length).toFixed(2)}</h4>
                            <p>Minutes to read</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="preview-card stats-card mt-4">
                <h2>Preview</h2>
                <p className="mt-3">{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </div>
        </>
    )
}
