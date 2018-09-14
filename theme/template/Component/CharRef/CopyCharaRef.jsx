import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

const CopyCharaRef = ({
  entitieName,
  text,
  justCopied,
  onCopied,
}) => (
  <CopyToClipboard
    text={`&${text};`}
    onCopy={() => onCopied(entitieName)}
  >
    <li className={justCopied === entitieName ? 'copied' : ''}>
      <span
        className="char"
        dangerouslySetInnerHTML={{
          __html: `&${entitieName};`,
        }}
      />
      <span className="anticon-class">
        {entitieName}
      </span>
    </li>
  </CopyToClipboard>
);

CopyCharaRef.propTypes = {
  entitieName: PropTypes.string.isRequired,
  justCopied: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onCopied: PropTypes.func.isRequired,
};

export default CopyCharaRef;
