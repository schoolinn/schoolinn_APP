import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-tag tag-info-box': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 150 }],
    'backgroundColor': '#258fe6'
  },
  'page-tag tag-info-box logo': {
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }],
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center center !important',
    'backgroundRepeat': 'no-repeat !important'
  },
  'page-tag tag-info-box tag-info': {
    'textAlign': 'center',
    'color': '#fff',
    'padding': [{ 'unit': 'rem', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'page-tag tag-info-box tag-info title': {
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': '700',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.7 }]
  },
  'page-tag item': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(178, 186, 194, 0.15)' }]
  },
  'page-tag item info-row': {
    'margin': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'page-tag item title': {
    'color': '#4a4a4a'
  },
  'page-tag item meta-list': {
    'display': 'flex',
    'alignItems': 'baseline',
    'whiteSpace': 'nowrap'
  },
  'page-tag item meta-list span': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'rem', 'value': 1.2 }],
    'padding': [{ 'unit': 'rem', 'value': 0.38 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.38 }, { 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'rem', 'value': 4.5 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#fff',
    'backgroundColor': '#56c4e1',
    'borderRadius': '2px'
  },
  'page-tag item meta-list item_li': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#8f969c'
  },
  'page-tag item meta-list item_li:after': {
    'content': '"\B7"',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }],
    'color': '#8f969c'
  }
});
