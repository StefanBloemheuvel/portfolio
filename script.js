const nodes = [
  { id: 1, label: 'A' },
  { id: 2, label: 'B' },
  { id: 3, label: 'C' },
];

const edges = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 1 },
];

const container = document.getElementById('graph-container');

const data = {
  nodes: nodes,
  edges: edges,
};

const options = {
  physics: {
    enabled: true,
    barnesHut: {
      gravitationalConstant: -10000,
      centralGravity: 0.3,
      springLength: 95,
      springConstant: 0.04,
      damping: 0.09,
      avoidOverlap: 0
    },
    stabilization: false
  }
};

const network = new vis.Network(container, data, options);
