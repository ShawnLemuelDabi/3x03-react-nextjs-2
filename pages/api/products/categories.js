import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Processors', 'RAM', 'Software'];
  res.send(categories);
});

export default handler;
