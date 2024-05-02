const url = 'https://api.bloxy.info/token/token_stat?token=0x42b05a12783a659eb53a7d90b2c70929af96ad71&key=ACCRWOWSJrvRv&format=structure';

async function getDeluxo() {
  const response = await fetch(url);
  const data = await response.json();
  const {circulating_supply, transfered_amount, transfers_count, latest_transfer, holders_count} = data[0];
  localStorage.setItem('tr_co',transfers_count);
  localStorage.setItem('ho_co',holders_count);
  let circ_supp_adj = circulating_supply - 4557450.00;
  localStorage.setItem('ci_su',circ_supp_adj.toFixed(2));
  localStorage.setItem('tr_am',transfered_amount.toFixed(2));
  displayLocalStorageWithCommas();
  localStorage.setItem("lastRefresh", Date.now());
}

if (localStorage.getItem("lastRefresh") === null) {
  getDeluxo();
}

else if (Date.now() - localStorage.getItem("lastRefresh") > 60000) {
  localStorage.removeItem('tr_co');
  localStorage.removeItem('ho_co');
  localStorage.removeItem('ci_su');
  localStorage.removeItem('tr_am');
  localStorage.removeItem('lastRefresh');
  getDeluxo();
}

else if (localStorage.getItem("lastRefresh") != null) {
  displayLocalStorageWithCommas();
}