import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TagView } from './components/TagView';

function App() {
  const treeData = {
    name: 'root',
    children: [
      {
        name: 'child1',
        children: [
          { name: 'child1-child1', data: 'c1-c1 Hello' },
          { name: 'child1-child2', data: 'c1-c2 JS' },
        ],
      },
      { name: 'child2', data: 'c2 World' },
    ],
  };

  const [tree, setTree] = useState(treeData);
  const [exportData, setExoprtData] = useState('');

  const handleTagNameChange = (tag, newName) => {
    tag.name = newName;
    setTree({ ...tree })
  }

  const handleAddChild = (tag) => {
    if (tag.data) {
      delete tag.data;
    }
    if (!tag.children) {
      tag.children = [];
    }
    tag.children.push({ "name": "New Child", "data": "Data" });
    setTree({ ...tree });
  }

  const handleDataNameChange = (tag, newName) => {
    tag.data = newName;
    setTree({ ...tree });
  }

  const handleExport = () => {
    const data = JSON.stringify(tree);
    setExoprtData(data);
  }

  return (
    <div className="App">
      <TagView
        tag={tree}
        onTagNameChange={handleTagNameChange}
        onAddChild={handleAddChild}
        onDataNameChange={handleDataNameChange}
      />
      <button className='export' onClick={handleExport}>Export</button>
      <pre className='exportData'>{exportData}</pre>
    </div>
  );
}

export default App;
