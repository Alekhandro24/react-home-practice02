import { Sticker } from 'components/Module3/Sticker/Sticker';
import { List } from 'components/Module3/StickerList/StickerList.styled';

export const StickerList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map((item, idx) => (
        <li key={idx}>
          <Sticker sticker={item} onDelete={onDelete} />
        </li>
      ))}
    </List>
  );
};
