import { ITextOnlyPageProps } from '../../data/terms';
import { isDesktop } from '../../utils';

export const TextOnlyPage = ({ pageData }: ITextOnlyPageProps) => {
  return (
    <div className='col'>
      <p className='title fs-x-large'>{pageData.title}</p>
      {isDesktop() ? (
        <div
          className='textonly fs-small'
          style={{ textIndent: '50px', width: '60vw', marginInline: 'auto' }}
          dangerouslySetInnerHTML={{ __html: pageData.content }}
        ></div>
      ) : (
        <div
          className='textonly col'
          style={{ textIndent: '20px', alignItems: 'center' }}
          dangerouslySetInnerHTML={{ __html: pageData.content }}
        ></div>
      )}
    </div>
  );
};
