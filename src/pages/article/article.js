import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-article item': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(178, 186, 194, 0.15)' }]
  },
  'page-article item info-row': {
    'margin': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'page-article item title': {
    'color': '#4a4a4a'
  },
  'page-article item meta-list': {
    'display': 'flex',
    'alignItems': 'baseline',
    'whiteSpace': 'nowrap'
  },
  'page-article item meta-list span': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'rem', 'value': 1.2 }],
    'padding': [{ 'unit': 'rem', 'value': 0.38 }, { 'unit': 'rem', 'value': 0.8 }, { 'unit': 'rem', 'value': 0.38 }, { 'unit': 'rem', 'value': 0.8 }],
    'minWidth': [{ 'unit': 'rem', 'value': 4.5 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#fff',
    'backgroundColor': '#56c4e1',
    'borderRadius': '2px'
  },
  'page-article item meta-list item_li': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#8f969c'
  },
  'page-article item meta-list item_li:after': {
    'content': '"\B7"',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }],
    'color': '#8f969c'
  }
});
