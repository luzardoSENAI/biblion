
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { User, Camera } from 'lucide-react';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Nome deve ter pelo menos 2 caracteres.',
  }),
  role: z.string().min(2, {
    message: 'Cargo deve ter pelo menos 2 caracteres.',
  }),
});

const UserProfile = () => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Usuário",
      role: "Bibliotecário(a)",
    },
  });

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        // Store in localStorage for persistence
        localStorage.setItem('userProfileImage', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Store user data in localStorage
    localStorage.setItem('userName', values.name);
    localStorage.setItem('userRole', values.role);
    
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram atualizadas com sucesso.",
    });
  };

  // Load user data and profile image from localStorage on component mount
  React.useEffect(() => {
    const savedName = localStorage.getItem('userName');
    const savedRole = localStorage.getItem('userRole');
    const savedProfileImage = localStorage.getItem('userProfileImage');
    
    if (savedName) {
      form.setValue('name', savedName);
    }
    
    if (savedRole) {
      form.setValue('role', savedRole);
    }
    
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
  }, [form]);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Perfil do Usuário</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <Avatar className="w-32 h-32 border-2 border-library-maroon">
                {profileImage ? (
                  <AvatarImage src={profileImage} alt="Foto de perfil" />
                ) : (
                  <AvatarFallback className="bg-library-maroon text-white text-4xl">
                    <User size={48} />
                  </AvatarFallback>
                )}
              </Avatar>
              <label 
                htmlFor="profile-image" 
                className="absolute bottom-0 right-0 bg-library-darkMaroon text-white p-2 rounded-full cursor-pointer"
              >
                <Camera size={18} />
                <span className="sr-only">Alterar foto</span>
              </label>
              <input 
                id="profile-image" 
                type="file" 
                accept="image/*" 
                onChange={handleProfileImageChange} 
                className="hidden" 
              />
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>
                    <FormDescription>
                      Este nome será exibido no cabeçalho e barra lateral.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu cargo" {...field} />
                    </FormControl>
                    <FormDescription>
                      Seu cargo na biblioteca.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-library-darkMaroon hover:bg-library-maroon">
                  Salvar alterações
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
