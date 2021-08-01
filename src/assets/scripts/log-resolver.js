const log = `
  [2021-05-20T08:35:42.882] [TRACE] [UPDATE.VALUE] - {
    response: '{"_index":"benefit_value_exception_2021.5","_type":"wok","_id":"1621353600000.F741.ad.cost_idl","_version":6,"result":"noop","_shards":{"total":0,"successful":0,"failed":0}}',
    payload: '{"id":"1621353600000.F741.ad.cost_idl","index":"benefit_value_exception_2021.5","type":"wok","body":{"doc":{"exception":0,"exception_value":null,"modified_value":1,"status":1},"doc_as_upsert":true}}'
  }
  [2021-05-20T08:35:42.889] [TRACE] [UPDATE.VALUE] - {
    response: '{"_index":"benefit_value_exception_2021.5","_type":"wks","_id":"1621353600000.F232.terf.cost_idl","_version":6,"result":"noop","_shards":{"total":0,"successful":0,"failed":0}}',
    payload: '{"id":"1621353600000.F232.terf.cost_idl","index":"benefit_value_exception_2021.5","type":"wks","body":{"doc":{"exception":0,"exception_value":null,"modified_value":12.600000381469727,"status":1},"doc_as_upsert":true}}'
  }
  [2021-05-20T08:35:42.889] [TRACE] [UPDATE.VALUE] - {
    response: '{"_index":"benefit_value_exception_2021.5","_type":"wks","_id":"1621353600000.F232.faoms.cost_idl","_version":6,"result":"noop","_shards":{"total":0,"successful":0,"failed":0}}',
    payload: '{"id":"1621353600000.F232.faoms.cost_idl","index":"benefit_value_exception_2021.5","type":"wks","body":{"doc":{"exception":0,"exception_value":null,"modified_value":0,"status":1},"doc_as_upsert":true}}'
  }
  [2021-05-20T08:35:42.890] [TRACE] [UPDATE.VALUE] - {
    response: '{"_index":"benefit_value_exception_2021.5","_type":"wks","_id":"1621353600000.F232.pmepl.cost_idl","_version":6,"result":"noop","_shards":{"total":0,"successful":0,"failed":0}}',
    payload: '{"id":"1621353600000.F232.pmepl.cost_idl","index":"benefit_value_exception_2021.5","type":"wks","body":{"doc":{"exception":0,"exception_value":null,"modified_value":39,"status":1},"doc_as_upsert":true}}'
  }`;

let clonedLog = log;
const group = log.match(/\[([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3})\]/g);
const row = [];
group.reduce((curr, next) => {
  const start = clonedLog.trim().indexOf(curr);
  clonedLog = clonedLog.replace(curr, curr.split('').map(() => '*').join(''));
  const end = clonedLog.trim().indexOf(next);
  row.push(log.slice(start, end));
  return next;
});

console.log(row);
