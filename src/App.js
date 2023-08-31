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
  console.log(tree);

  const handleTagNameChange = (tag, newName) => {
    tag.name = newName;
    setTree({ ...tree })
  }

  return (
    <div className="App">
      <TagView
        tag={tree}
        onTagNameChange={handleTagNameChange}
      />
    </div>
  );
}

export default App;
