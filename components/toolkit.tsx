export const toolkit = [
  {name:'Figma',mark:'Fi',use:'Layouts & prototypes'},
  {name:'Framer',mark:'Fr',use:'Websites & interactions'},
  {name:'ChatGPT',mark:'AI',use:'Ideation & writing support'},
];
export default function Toolkit(){return <aside id="tools" className="toolkit panel"><p className="eyebrow">THE WORKING KIT / 03</p><h2>Tools I’ve<br/><em>worked with.</em></h2><ul>{toolkit.map(tool=><li key={tool.name}><span className="tool-mark" aria-hidden="true">{tool.mark}</span><div><h3>{tool.name}</h3><p>{tool.use}</p></div></li>)}</ul><p className="tool-note">Different tools. One intention:<br/>bring the idea to life.</p></aside>}
