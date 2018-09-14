import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Tooltip } from 'antd';

const baseUrl = '';

export default function EditButton({ title, filename }) {
  return (
    <Tooltip title={title}>
      <a href={`${baseUrl}${filename}`} target="_blank" className="edit-button" rel="noopener noreferrer">
        <Icon type="edit" />
      </a>
    </Tooltip>
  );
}

EditButton.propTypes = {
  title: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
};
