export const toolkit = [
  {name:'Figma',mark:'Fi',use:'Layouts & prototypes'},
  {name:'Framer',mark:'Fr',use:'Websites & interactions'},
  {name:'DaVinci',mark:'Da',use:'for professional level editing'},
  {name:'Notion',mark:'Nn',use:'for ideation and brainstorming'},
  {name:'Claude',mark:'Cl',use:'AI-assisted research & writing'},
  {name:'ChatGPT',mark:'GPT',use:'Ideas & problem-solving'},
  {name:'Adobe Premiere',mark:'Pr',use:'Video editing & post-production'},
  {name:'Affinity',mark:'Af',use:'Graphic design & image editing'},
];
export default function Toolkit(){return <aside id="tools" className="toolkit panel"><p className="eyebrow">THE WORKING KIT / 03</p><h2>Tools I’ve<br/><em>worked with.</em></h2><ul>{toolkit.map(tool=><li key={tool.name}><span className="tool-mark" aria-hidden="true">{tool.mark}</span><div><h3>{tool.name}</h3><p>{tool.use}</p></div></li>)}</ul><p className="tool-note">Different tools. One intention:<br/>bring the idea to life.</p></aside>}
