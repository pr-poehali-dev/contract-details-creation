import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

interface ContractData {
  contractNumber: string;
  contractDate: string;
  supplier: {
    name: string;
    address: string;
    inn: string;
    kpp: string;
    ogrn: string;
    bank: string;
    bik: string;
    accountNumber: string;
    director: string;
  };
  customer: {
    name: string;
    address: string;
    inn: string;
    kpp: string;
    ogrn: string;
    bank: string;
    bik: string;
    accountNumber: string;
    director: string;
  };
}

const Index = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [contractData, setContractData] = useState<ContractData>({
    contractNumber: '001/2025',
    contractDate: new Date().toLocaleDateString('ru-RU'),
    supplier: {
      name: 'ООО "Поставщик"',
      address: 'г. Москва, ул. Примерная, д. 1',
      inn: '1234567890',
      kpp: '123456789',
      ogrn: '1234567890123',
      bank: 'ПАО "Банк"',
      bik: '044525225',
      accountNumber: '40702810000000000000',
      director: 'Иванов И.И.',
    },
    customer: {
      name: 'ООО "Заказчик"',
      address: 'г. Санкт-Петербург, ул. Образцовая, д. 2',
      inn: '0987654321',
      kpp: '987654321',
      ogrn: '3210987654321',
      bank: 'ПАО "Другой банк"',
      bik: '044030653',
      accountNumber: '40702810111111111111',
      director: 'Петров П.П.',
    },
  });

  const handlePrint = () => {
    window.print();
  };

  const updateField = (
    side: 'supplier' | 'customer',
    field: keyof ContractData['supplier'],
    value: string
  ) => {
    setContractData((prev) => ({
      ...prev,
      [side]: {
        ...prev[side],
        [field]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="no-print bg-muted border-b py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Icon name="FileText" size={24} className="text-primary" />
          <h1 className="text-xl font-semibold">Договор с реквизитами</h1>
        </div>
        <div className="flex gap-3">
          <Button
            variant={isEditing ? 'default' : 'outline'}
            onClick={() => setIsEditing(!isEditing)}
          >
            <Icon name={isEditing ? 'Eye' : 'Pencil'} size={18} className="mr-2" />
            {isEditing ? 'Просмотр' : 'Редактировать'}
          </Button>
          <Button onClick={handlePrint} variant="outline">
            <Icon name="Printer" size={18} className="mr-2" />
            Печать
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <Card className="p-12 bg-white shadow-lg print:shadow-none">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold uppercase tracking-wide">
                Договор
              </h2>
              {isEditing ? (
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span>№</span>
                  <Input
                    value={contractData.contractNumber}
                    onChange={(e) =>
                      setContractData({ ...contractData, contractNumber: e.target.value })
                    }
                    className="w-32 h-8 text-center"
                  />
                  <span>от</span>
                  <Input
                    value={contractData.contractDate}
                    onChange={(e) =>
                      setContractData({ ...contractData, contractDate: e.target.value })
                    }
                    className="w-40 h-8 text-center"
                  />
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  № {contractData.contractNumber} от {contractData.contractDate}
                </p>
              )}
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4 uppercase text-center">
                Реквизиты сторон
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-base border-b pb-2">Поставщик</h4>
                  {isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs text-muted-foreground">Наименование</Label>
                        <Input
                          value={contractData.supplier.name}
                          onChange={(e) => updateField('supplier', 'name', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Адрес</Label>
                        <Textarea
                          value={contractData.supplier.address}
                          onChange={(e) => updateField('supplier', 'address', e.target.value)}
                          className="mt-1 min-h-[60px]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs text-muted-foreground">ИНН</Label>
                          <Input
                            value={contractData.supplier.inn}
                            onChange={(e) => updateField('supplier', 'inn', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">КПП</Label>
                          <Input
                            value={contractData.supplier.kpp}
                            onChange={(e) => updateField('supplier', 'kpp', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">ОГРН</Label>
                        <Input
                          value={contractData.supplier.ogrn}
                          onChange={(e) => updateField('supplier', 'ogrn', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Банк</Label>
                        <Input
                          value={contractData.supplier.bank}
                          onChange={(e) => updateField('supplier', 'bank', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs text-muted-foreground">БИК</Label>
                          <Input
                            value={contractData.supplier.bik}
                            onChange={(e) => updateField('supplier', 'bik', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Р/С</Label>
                          <Input
                            value={contractData.supplier.accountNumber}
                            onChange={(e) =>
                              updateField('supplier', 'accountNumber', e.target.value)
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Директор</Label>
                        <Input
                          value={contractData.supplier.director}
                          onChange={(e) => updateField('supplier', 'director', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">{contractData.supplier.name}</p>
                      <p className="text-muted-foreground">{contractData.supplier.address}</p>
                      <div className="space-y-1">
                        <p>
                          <span className="text-muted-foreground">ИНН:</span>{' '}
                          {contractData.supplier.inn}
                        </p>
                        <p>
                          <span className="text-muted-foreground">КПП:</span>{' '}
                          {contractData.supplier.kpp}
                        </p>
                        <p>
                          <span className="text-muted-foreground">ОГРН:</span>{' '}
                          {contractData.supplier.ogrn}
                        </p>
                        <p>
                          <span className="text-muted-foreground">Банк:</span>{' '}
                          {contractData.supplier.bank}
                        </p>
                        <p>
                          <span className="text-muted-foreground">БИК:</span>{' '}
                          {contractData.supplier.bik}
                        </p>
                        <p>
                          <span className="text-muted-foreground">Р/С:</span>{' '}
                          {contractData.supplier.accountNumber}
                        </p>
                        <p className="pt-2">
                          <span className="text-muted-foreground">Директор:</span>{' '}
                          {contractData.supplier.director}
                        </p>
                      </div>
                      <div className="border-t pt-4 mt-4">
                        <p className="text-right">_________________</p>
                        <p className="text-right text-xs text-muted-foreground mt-1">
                          (подпись)
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-base border-b pb-2">Заказчик</h4>
                  {isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs text-muted-foreground">Наименование</Label>
                        <Input
                          value={contractData.customer.name}
                          onChange={(e) => updateField('customer', 'name', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Адрес</Label>
                        <Textarea
                          value={contractData.customer.address}
                          onChange={(e) => updateField('customer', 'address', e.target.value)}
                          className="mt-1 min-h-[60px]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs text-muted-foreground">ИНН</Label>
                          <Input
                            value={contractData.customer.inn}
                            onChange={(e) => updateField('customer', 'inn', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">КПП</Label>
                          <Input
                            value={contractData.customer.kpp}
                            onChange={(e) => updateField('customer', 'kpp', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">ОГРН</Label>
                        <Input
                          value={contractData.customer.ogrn}
                          onChange={(e) => updateField('customer', 'ogrn', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Банк</Label>
                        <Input
                          value={contractData.customer.bank}
                          onChange={(e) => updateField('customer', 'bank', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs text-muted-foreground">БИК</Label>
                          <Input
                            value={contractData.customer.bik}
                            onChange={(e) => updateField('customer', 'bik', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Р/С</Label>
                          <Input
                            value={contractData.customer.accountNumber}
                            onChange={(e) =>
                              updateField('customer', 'accountNumber', e.target.value)
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Директор</Label>
                        <Input
                          value={contractData.customer.director}
                          onChange={(e) => updateField('customer', 'director', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">{contractData.customer.name}</p>
                      <p className="text-muted-foreground">{contractData.customer.address}</p>
                      <div className="space-y-1">
                        <p>
                          <span className="text-muted-foreground">ИНН:</span>{' '}
                          {contractData.customer.inn}
                        </p>
                        <p>
                          <span className="text-muted-foreground">КПП:</span>{' '}
                          {contractData.customer.kpp}
                        </p>
                        <p>
                          <span className="text-muted-foreground">ОГРН:</span>{' '}
                          {contractData.customer.ogrn}
                        </p>
                        <p>
                          <span className="text-muted-foreground">Банк:</span>{' '}
                          {contractData.customer.bank}
                        </p>
                        <p>
                          <span className="text-muted-foreground">БИК:</span>{' '}
                          {contractData.customer.bik}
                        </p>
                        <p>
                          <span className="text-muted-foreground">Р/С:</span>{' '}
                          {contractData.customer.accountNumber}
                        </p>
                        <p className="pt-2">
                          <span className="text-muted-foreground">Директор:</span>{' '}
                          {contractData.customer.director}
                        </p>
                      </div>
                      <div className="border-t pt-4 mt-4">
                        <p className="text-right">_________________</p>
                        <p className="text-right text-xs text-muted-foreground mt-1">
                          (подпись)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
