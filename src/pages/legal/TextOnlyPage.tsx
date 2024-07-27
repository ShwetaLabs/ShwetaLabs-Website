import { ITextOnlyPageProps } from '../../data/terms';
import { isDesktop } from '../../utils';
/*
Steps to get html from a word document (used for Terms, Privacy and Cookies):
1. word2cleanhtml.com
2. '<br>' -> ''
3. ^    \d\d?\. (.*)  -> <li class="fw-bold fs-medium">$1</li>
  3.1 add <ol> </ol>.
4. li.class = "fw-bold fs-medium" (use find, replace)
5. ^    (.*?:) -> <span class="fw-bold">$1</span>
6. Add <br>s where necessary
*/
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
