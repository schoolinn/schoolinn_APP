import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-sub ul': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflowX': 'hidden',
    'background': '#fff'
  },
  'page-sub ul li': {
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eeeeee' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eeeeee' }],
    'height': [{ 'unit': 'rem', 'value': 13 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'flexDirection': 'column',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#a7a7a7'
  },
  'page-sub ul li logo': {
    'width': [{ 'unit': 'px', 'value': 54 }],
    'height': [{ 'unit': 'px', 'value': 54 }],
    'marginBottom': [{ 'unit': 'px', 'value': 6 }],
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center center !important',
    'backgroundRepeat': 'no-repeat !important'
  },
  'page-sub ul li name': {
    'lineHeight': [{ 'unit': 'px', 'value': 36 }]
  },
  'page-sub ul li meta-box': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#909090'
  },
  'page-sub ul li meta-box article': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.8 }]
  }
});
