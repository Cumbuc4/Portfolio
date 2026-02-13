import crypto from 'crypto';

// Mapeamento de hashes para URLs das imagens
const imageHashMap: Record<string, string> = {
  // Bitdefender
  'bd_business': '/images/certifications/bitdefender/certificado_bitdefender_business.png',
  'bd_encryption': '/images/certifications/bitdefender/certificado_bitdefender_encryption.png',
  'bd_comercial': '/images/certifications/bitdefender/certificado_bitdefender_comercial.png',
  'bd_cybersecurity_essentials': '/images/certifications/bitdefender/certificado_cybersecurity_essentials.png',
  'bd_premium': '/images/certifications/bitdefender/certificado_bitdefender_premium.png',
  'bd_patch': '/images/certifications/bitdefender/certificado_bitdefender_patch.png',
  'bd_partner': '/images/certifications/bitdefender/certificado_bitdefender_partner.png',
  'bd_enterprise': '/images/certifications/bitdefender/certificado_bitdefender_enterprise.png',
  
  // CrowdStrike
  'cs_100': '/images/certifications/crowdstrike/CrowdStrike_100.png',
  'cs_101': '/images/certifications/crowdstrike/CrowdStrike_101.png',
  'cs_102': '/images/certifications/crowdstrike/CrowdStrike_102.png',
  'cs_104': '/images/certifications/crowdstrike/CrowdStrike_104.png',
  'cs_105': '/images/certifications/crowdstrike/CrowdStrike_105.png',
  'cs_106': '/images/certifications/crowdstrike/CrowdStrike_106.png',
  'cs_107': '/images/certifications/crowdstrike/CrowdStrike_107.png',
  'cs_109': '/images/certifications/crowdstrike/CrowdStrike_109.png',
  'cs_114': '/images/certifications/crowdstrike/CrowdStrike_114.png',
  'cs_115': '/images/certifications/crowdstrike/CrowdStrike_115.png',
  'cs_120': '/images/certifications/crowdstrike/CrowdStrike_120.png',
  'cs_121': '/images/certifications/crowdstrike/CrowdStrike_121.png',
  'cs_122': '/images/certifications/crowdstrike/CrowdStrike_122.png',
  'cs_160': '/images/certifications/crowdstrike/CrowdStrike_160.png',
  
  // TryHackMe
  'thm_pre_security': '/images/certifications/thm/pre-security.png',
  'thm_networking_nerd': '/images/certifications/thm/networkfundamentals.png',
  'thm_world_wide_web': '/images/certifications/thm/howthewebworks.png',
  'thm_webbed': '/images/certifications/thm/webbed.png',
  'thm_cat_linux': '/images/certifications/thm/linux.png',
  
  // DESEC
  'desec_network_analyst': '/images/certifications/desec/network-analyst.png',
  'desec_pentest_fundamentals': '/images/certifications/desec/pentest-fundamentals.png',
  
  // Sophos
  'sophos_engineer': '/images/certifications/sophos/ET80.png',
  
  // Segura
  'segura_pam_core': '/images/certifications/segura/PAM_Core_Certification__Access_Control.png',
  
  // Hack The Box
  'htb_academician': '/images/certifications/htb/academician.png',
  'htb_your_request': '/images/certifications/htb/your-request-is-my-demand.png',
  'htb_expressway_cover': '/images/coverMdx/htb-expressway.png',
  
  // Outras imagens do site
  'avatar': '/images/avatar.jpg',
  'icon': '/icon.png',
};

// Função para gerar hash dinâmico baseado em timestamp
export function generateDynamicHash(staticHash: string): string {
  const timestamp = Math.floor(Date.now() / (1000 * 60 * 60)); // Muda a cada hora
  const combined = `${staticHash}_${timestamp}`;
  return crypto.createHash('sha256').update(combined).digest('hex').substring(0, 12);
}

// Função para obter a URL real a partir do hash
export function getImageUrl(hash: string): string {
  return imageHashMap[hash] || '/images/placeholder.png';
}

// Função para validar se um hash é válido
export function isValidImageHash(hash: string): boolean {
  // Verifica se o hash completo existe no mapeamento
  if (hash in imageHashMap) {
    return true;
  }
  
  // Se o hash não tem sufixo dinâmico, verifica diretamente
  if (!hash.includes('_')) {
    return hash in imageHashMap;
  }
  
  // Para hashes dinâmicos com timestamp, verifica o hash base
  const parts = hash.split('_');
  if (parts.length > 2) {
    const baseHash = parts.slice(0, -1).join('_');
    return baseHash in imageHashMap;
  }
  
  return false;
}

// Função para obter hash base de um hash dinâmico
export function getBaseHash(dynamicHash: string): string {
  // Para hashes que já são completos (como cs_100, htb_academician), retorna o próprio hash
  if (dynamicHash.includes('_') && imageHashMap[dynamicHash]) {
    return dynamicHash;
  }
  
  // Se o hash não tem sufixo dinâmico, retorna o próprio hash
  if (!dynamicHash.includes('_')) {
    return dynamicHash;
  }
  
  // Para hashes dinâmicos com timestamp, remove o sufixo
  const parts = dynamicHash.split('_');
  if (parts.length > 2) {
    return parts.slice(0, -1).join('_');
  }
  
  return dynamicHash;
} 
