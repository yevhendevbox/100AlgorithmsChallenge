export function domainType(domains: string[]): string[] {
  const labels = {
    org: 'organisation',
    com: 'commercial',
    net: 'network',
    info: 'information',
  }

  return domains.map(domain => {
    const temp = domain.split('.')[domain.split('.').length - 1];
    return labels[temp];
  });
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));